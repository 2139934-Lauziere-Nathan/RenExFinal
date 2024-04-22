const db = require("../.src/config/pg_db");

const mod = {
    getAll: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM public.tache WHERE utilisateur_id = $1';
            const value = [id]
            db.query(query, value, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("resolve");
                    resolve(result);
                }
            });
        });
    }
};
module.exports = mod;