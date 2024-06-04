const bubblesortFunction = async (request, response) => {
    try {
        response.send('hello there');
    } catch (error) {
        response.status(500).json({ ErrorMessage: error.message });
    }
};

module.exports = { bubblesortFunction };
