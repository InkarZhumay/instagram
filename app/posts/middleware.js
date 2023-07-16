const Post = require('./models/posts')

const validatePost = (req,res)=> {
    let errors = {};

    if(!req.body.user_id || req.body.user_id.length === 0)
        errors.first_name = "Поле user_id обязательное"

    if(!req.body.publish_date || req.body.publish_date.length === 0)
        errors.last_name = "Поле publish_date обязательное"


    if(JSON.sytringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfPost = async (req, res, next) => {
    const id = req.params.id || req.body.id;

    const post = await Post.findByPk(id);
    if(!post) res.status(400).send({message: "Post with id does not exist"});
    else if(req.user.id === post.userId) next();
    else res.status(403).send({message: "Access Forbiden"});
}
module.exports ={
    validatePost,
    isAuthorOfPost
}