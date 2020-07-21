/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Implement hash primitives.
 */
const crypto = require('crypto');
const Hash = require('../Hash');

class hash_sha2_256 extends Hash {

	constructor() {
		super(512);
	}

	hash(data, encoding = 'hex') {
		return this.reset().update(data).finalize(encoding);
	}

	reset() {
		this._hash = crypto.createHash('sha256');
		return super.reset();
	}

	finalize(encoding) {
		const hash = this._hash.digest(encoding);
		this.reset();
		return hash;
	}

}

module.exports = hash_sha2_256;