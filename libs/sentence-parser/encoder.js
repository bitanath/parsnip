import * as tf from "./tf.js";

const stringToChars = (input) => {
  const symbols = [];
  for (const symbol of input) {
    symbols.push(symbol);
  }
  return symbols;
};

class TrieNode {
  constructor() {
    this.parent = null;
    this.children = {};
    this.end = false;
    this.word = [[], 0, 0];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, score, index) {
    let node = this.root;
    const symbols = stringToChars(word);

    for (let i = 0; i < symbols.length; i++) {
      if (!node.children[symbols[i]]) {
        node.children[symbols[i]] = new TrieNode();
        node.children[symbols[i]].parent = node;
        node.children[symbols[i]].word[0] = node.word[0].concat(symbols[i]);
      }

      node = node.children[symbols[i]];
      if (i === symbols.length - 1) {
        node.end = true;
        node.word[1] = score;
        node.word[2] = index;
      }
    }
  }

  commonPrefixSearch(ss) {
    const output = [];
    let node = this.root.children[ss[0]];

    for (let i = 0; i < ss.length && node; i++) {
      if (node.end) {
        output.push(node.word);
      }
      node = node.children[ss[i + 1]];
    }

    if (!output.length) {
      output.push([[ss[0]], 0, 0]);
    }

    return output;
  }
}


function processInput(str) {
  const normalized = str.normalize("NFKC");
  const separator = "\u2581";
  return normalized.length > 0
    ? separator + normalized.replace(/ /g, separator)
    : normalized;
}

export class Tokenizer {
  constructor(vocabulary, reservedSymbolsCount = 6) {
    this.trie = new Trie();
    this.vocabulary = vocabulary;
    for (let i = reservedSymbolsCount; i < vocabulary.length; i++) {
      this.trie.insert(vocabulary[i][0], vocabulary[i][1], i);
    }
  }

  encode(input) {
    const nodes = [];
    const words = [];
    const best = [];

    input = processInput(input);

    const symbols = stringToChars(input);

    for (let i = 0; i <= symbols.length; i++) {
      nodes.push({});
      words.push(0);
      best.push(0);
    }

    for (let i = 0; i < symbols.length; i++) {
      const matches = this.trie.commonPrefixSearch(symbols.slice(i));

      for (let j = 0; j < matches.length; j++) {
        const piece = matches[j];
        const obj = {key: piece[0], score: piece[1], index: piece[2]};

        const endPos = piece[0].length;
        if (nodes[i + endPos][i] == null) {
          nodes[i + endPos][i] = [];
        }

        nodes[i + endPos][i].push(obj);
      }
    }

    for (let endPos = 0; endPos <= symbols.length; endPos++) {
      for (const startPos in nodes[endPos]) {
        const arr = nodes[endPos][startPos];

        for (let j = 0; j < arr.length; j++) {
          const word = arr[j];
          const score = word.score + best[endPos - word.key.length];

          if (best[endPos] === 0 || score >= best[endPos]) {
            best[endPos] = score;
            words[endPos] = arr[j].index;
          }
        }
      }
    }

    const results = [];

    let iter = words.length - 1;
    while (iter > 0) {
      results.push(words[iter]);
      iter -= this.vocabulary[words[iter]][0].length;
    }

    const merged = [];
    let isPreviousUnk = false;
    for (let i = 0; i < results.length; i++) {
      const id = results[i];
      if (!(isPreviousUnk && id === 0)) {
        merged.push(id);
      }

      isPreviousUnk = id === 0;
    }

    return merged.reverse();
  }
}

export class SentenceEncoder {
  constructor(model, vocab) {
    this.model = model;
    this.tokenizer = new Tokenizer(vocab);
  }

  async embed(inputs) {
    if (typeof inputs === "string") {
      inputs = [inputs];
    }

    const encodings = inputs.map((d) => this.tokenizer.encode(d));

    const indicesArr = encodings.map((arr, i) =>
      arr.map((d, index) => [i, index])
    );

    let flattenedIndicesArr = [];
    for (let i = 0; i < indicesArr.length; i++) {
      flattenedIndicesArr = flattenedIndicesArr.concat(indicesArr[i]);
    }

    const indices = tf.tensor2d(flattenedIndicesArr, [flattenedIndicesArr.length, 2], 'int32');
    const values = tf.tensor1d(tf.util.flatten(encodings), 'int32');

    const modelInputs = { indices: indices, values: values };
    const embeddings = await this.model.executeAsync(modelInputs);

    indices.dispose();
    values.dispose();

    return embeddings;
  }
}


