import {Dahakni, User} from '../models';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getDahaknies(req, res) {
  Dahakni.find().sort('-dateAdded').exec((err, dahaknies) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dahaknies });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addDahakni(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newDahakni = new Dahakni(req.body.post);

  // Let's sanitize inputs
  newDahakni.title = sanitizeHtml(newDahakni.title);
  newDahakni.name = sanitizeHtml(newDahakni.name);
  newDahakni.content = sanitizeHtml(newDahakni.content);

  newDahakni.slug = slug(newDahakni.title.toLowerCase(), { lowercase: true });
  newDahakni.cuid = cuid();
  newDahakni.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dahakni: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getDahakni(req, res) {
  Dahakni.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dahakni });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteDahakni(req, res) {
  Dahakni.findOne({ cuid: req.params.cuid }).exec((err, dahakni) => {
    if (err) {
      res.status(500).send(err);
    }

    dahakni.remove(() => {
      res.status(200).end();
    });
  });
}
