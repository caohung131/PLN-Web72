const logAPI = (req, res, next) => {
    console.log("Api request at", new Date().toLocaleString("vi"));
    next(); 
}

module.exports = { logAPI }