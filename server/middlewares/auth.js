const adminAuth = (req, res, next) => {
    const token = "xyz1";
    const isVerify = token === "xyz";

    if (!isVerify) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

const userAuth = (req, res, next) => {
    const token = "xyz";
    const isVerify = token === "xyz";

    if (!isVerify) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

module.exports={adminAuth,userAuth};