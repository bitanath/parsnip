export class StorageDB {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    async save(item) {
        try {
            const items = await this.getAll();
            const {id,object} = item
            items[id] = {
                ...object,
                id,
                timestamp: Date.now()
            };
            
            await chrome.storage.local.set({ [this.storageKey]: items });
            return id;
        } catch (error) {
            console.error('Error saving object:', error);
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await chrome.storage.local.get(this.storageKey);
            return result[this.storageKey] || {};
        } catch (error) {
            console.error('Error getting all objects:', error);
            throw error;
        }
    }

    async getByIds(ids) {
        try {
            const items = await this.getAll();
            return ids.reduce((selected, id) => {
                if (items[id]) {
                    selected[id] = items[id];
                }
                return selected;
            }, {});
        } catch (error) {
            console.error('Error getting objects by IDs:', error);
            throw error;
        }
    }

    async deleteByIds(ids) {
        try {
            const items = await this.getAll();
            for(const id of ids){
                delete items[id];
            }
            await chrome.storage.local.set({ [this.storageKey]: items });
            return true;
        } catch (error) {
            console.error('Error deleting object:', error);
            throw error;
        }
    }

    async getByFilter(filterFn) {
        try {
            const items = await this.getAll();
            return Object.entries(items)
                .filter(([_, value]) => filterFn(value))
                .reduce((filtered, [key, value]) => {
                    filtered[key] = value;
                    return filtered;
                }, {});
        } catch (error) {
            console.error('Error filtering objects:', error);
            throw error;
        }
    }

    async update(id, updates) {
        try {
            const items = await this.getAll();
            if (!items[id]) {
                throw new Error('Object not found');
            }
            
            items[id] = {
                ...items[id],
                ...updates,
                lastModified: Date.now()
            };
            
            await chrome.storage.local.set({ [this.storageKey]: items });
            return items[id];
        } catch (error) {
            console.error('Error updating object:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const items = await this.getAll();
            if (!items[id]) {
                throw new Error('Object not found');
            }
            
            delete items[id];
            await chrome.storage.local.set({ [this.storageKey]: items });
            return true;
        } catch (error) {
            console.error('Error deleting object:', error);
            throw error;
        }
    }

    async clear() {
        try {
            await chrome.storage.local.remove(this.storageKey);
            return true;
        } catch (error) {
            console.error('Error clearing storage:', error);
            throw error;
        }
    }
}
