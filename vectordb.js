export class VectorDB {
	constructor(dimensions = 512) {
	  this.dimensions = dimensions;
	}
  
	async storeVector( obj = {}) {
		try{
			const {id, vector, metadata} = obj
			if (vector.length !== this.dimensions) {
				throw new Error(`Vector must have ${this.dimensions} dimensions`);
			}
		
			const vectors = await this._getVectors();
			vectors[id] = {
				vector: vector,
				metadata: metadata
			};
		
			await chrome.storage.session.set({ vectors });
			return true
		}catch(e){
			return false
		}
	}

	async getVector(id) {
		const vectors = await this._getVectors();
		const vector = vectors[id];
		if (!vector) {
		  throw new Error(`Vector with id ${id} not found`);
		}
		return vector;
	}
  
	async findSimilar(queryVector, limit = 5, target = 0.33) {
	  if (queryVector.length !== this.dimensions) {
		throw new Error(`Query vector must have ${this.dimensions} dimensions`);
	  }
  
	  const vectors = await this._getVectors();
	  const scores = [];
  
	  for (const [id, data] of Object.entries(vectors)) {
		const similarity = this._cosineSimilarity(queryVector, data.vector);
		scores.push({
		  id: id,
		  similarity: similarity,
		  metadata: data.metadata
		});
	  }
  
	  return scores
	  	.filter(a=>a.similarity > target)
		.sort((a, b) => b.similarity - a.similarity)
		.slice(0, limit);
	}
  
	async deleteVector(id) {
	  const vectors = await this._getVectors();
	  delete vectors[id];
	  await chrome.storage.session.set({ vectors });
	}
  
	async clear() {
	  await chrome.storage.session.remove('vectors');
	}
  
	async _getVectors() {
	  const result = await chrome.storage.session.get('vectors');
	  return result.vectors || {};
	}
  
	_cosineSimilarity(vecA, vecB) {
	  let dotProduct = 0;
	  let normA = 0;
	  let normB = 0;
  
	  for (let i = 0; i < this.dimensions; i++) {
		dotProduct += vecA[i] * vecB[i];
		normA += vecA[i] * vecA[i];
		normB += vecB[i] * vecB[i];
	  }
  
	  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
	}
}