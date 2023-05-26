function Card1(props) {
    const {id, title,src} = props;

    return(
        <article>
        <h3>{title}<span className="middle_border"></span></h3>

        <img src={src} alt="" id={id}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat aspernatur earum quia, illum rem provident 
            necessitatibus fugiat consequatur fuga assumenda aliquam 
            sequi consectetur dolores repellendus velit maiores sed 
            corporis quos eius! Mollitia quod recusandae laborum vel 
            quibusdam, vero temporibus, illum sit ratione dolore animi 
            a doloremque aperiam ipsa, labore ad molestiae optio cupiditate 
            eligendi nobis sint. Error voluptates, maiores veritatis est dicta 
            harum suscipit, corporis reiciendis neque beatae incidunt.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat aspernatur earum quia, illum rem provident 
            necessitatibus fugiat consequatur fuga assumenda aliquam 
            sequi consectetur dolores repellendus velit maiores sed 
            corporis quos eius! Mollitia quod recusandae laborum vel 
            quibusdam, vero temporibus, illum sit ratione dolore animi 
            a doloremque aperiam ipsa, labore ad molestiae optio cupiditate 
            eligendi nobis sint. Error voluptates, maiores veritatis est dicta 
            harum suscipit, corporis reiciendis neque beatae incidunt.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat aspernatur earum quia, illum rem provident 
            necessitatibus fugiat consequatur fuga assumenda aliquam 
            sequi consectetur dolores repellendus velit maiores sed 
            corporis quos eius! Mollitia quod recusandae laborum vel 
            quibusdam, vero temporibus, illum sit ratione dolore animi 
            a doloremque aperiam ipsa, labore ad molestiae optio cupiditate 
            eligendi nobis sint. Error voluptates, maiores veritatis est dicta 
            harum suscipit, corporis reiciendis neque beatae incidunt.
        </p>

    </article>

    )
}

export default Card1;