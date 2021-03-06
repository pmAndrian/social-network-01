import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()

    let addNewPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <section className={s.posts}>
            <p className={s.heading}>My posts</p>
            <form className={s.form}>
                <textarea className={s.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="text" placeholder="Your news..." />
                <input className={s.input} onClick={addNewPost} type="button" value="Send" />
            </form>
            {postsElements}
        </section>
    )
}

export default Posts