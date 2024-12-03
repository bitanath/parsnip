import * as tf from "./tf.js";
import { use_vocab } from "./vocab.js";
import { use_model } from "./model.js";
import { use_weights } from "./weights.js";
import { SentenceEncoder } from "./encoder.js";

export function getFileObject(filename, data, mimetype = "application/octet-stream") {
	let dataStr = atob(data);
	let n = dataStr.length;
	let dataArr = new Uint8Array(n);

	while (n--) {
		dataArr[n] = dataStr.charCodeAt(n);
	}

	let file = new File([dataArr], filename, { type: mimetype });
	return file;
}

export function cosineSimilarity(vector1, vector2) {
	if (vector1.length !== 512 || vector2.length !== 512) {
		throw new Error("Vectors must be 512-dimensional");
	}

	let dotProduct = 0;
	let norm1 = 0;
	let norm2 = 0;

	for (let i = 0; i < 512; i++) {
		dotProduct += vector1[i] * vector2[i];
		norm1 += vector1[i] * vector1[i];
		norm2 += vector2[i] * vector2[i];
	}

	norm1 = Math.sqrt(norm1);
	norm2 = Math.sqrt(norm2);
	
	if (norm1 === 0 || norm2 === 0) {
		return 0;//NOTE Prevent division by zero
	}
    
	return dotProduct / (norm1 * norm2);
}

export class SentenceEmbeddingGenerator {
    constructor() {
        this.weights = getFileObject("weights.bin", use_weights);
        this.modeljson = getFileObject( "model.json", btoa(JSON.stringify(use_model)) );
    }

    async init(){
        this.model = await tf.loadGraphModel(tf.io.browserFiles([this.modeljson, this.weights]))
        this.sentence_encoder = new SentenceEncoder(this.model, JSON.parse(use_vocab));
    }

    async embed(sentences) {
        try {
            if(!this.model || !this.sentence_encoder){
                await this.init()
            }

            let embeddings = await this.sentence_encoder.embed(sentences)
			embeddings = await embeddings.array()
            return embeddings

        } catch (error) {
            console.error('Error processing data:', error);
            throw error;
        }
    }
}

