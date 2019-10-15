const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
    async index(req, res) {
        const tech = req.query.tech;
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {
        // req.file (arquivo)
        const filename = req.file.filename;
        // req.body (parametros)
        const company = req.body.company;
        const techs = req.body.techs;
        const price = req.body.price;
        // req.headers (cabeçalho)
        const user_id = req.headers.user_id;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: "User does not exists!" });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs: techs.split(",").map(tech => tech.trim()),
            price: price
        });

        return res.json(spot);
    }
}