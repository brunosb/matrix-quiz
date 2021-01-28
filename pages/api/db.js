import db from '../../db.json';

export default function dbHandler(request, response) {
  return response.json(db);
}
