#!/usr/bin/env node

const parseTorrent = require('parse-torrent')
const fs = require('fs');
const torrentFile = process.argv[2];

data = parseTorrent(fs.readFileSync(torrentFile));
const uri = parseTorrent.toMagnetURI(data);
console.log(uri);

