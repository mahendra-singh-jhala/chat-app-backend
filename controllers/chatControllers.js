// store the message
let messages = [];

exports.sendChat = async (req, res) => {
    const { message, user } = req.body;

    messages.push({ message, user});

    res.status(200).send({
        success: true
    })
}

exports.message = async (req, res) => {
    res.status(200).json(messages)
}