const ListItem = (props) => {
    return(
        <div className="col-md-4">
            <h4>{props.title}</h4>
            <p className="p-sm">{props.copy}</p>
        </div>
    )
} 

export default ListItem