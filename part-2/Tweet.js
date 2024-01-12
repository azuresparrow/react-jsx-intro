const Tweet = (props) => {
    const tweet = {
        backgroundColor: "#f5f6fa",
        color:"#30336b",
        padding:".5em",
        fontFamily:"Arial"
    }

    const user = {
        color:"rgb(164 181 203)"
    }

    const name = {
        color: "#2c3e50",
        fontSize:"120%",
        fontweight:"bold"
    }

    const dated = {
        color:"rgb(164 181 203)",
        fontWeight: "lighter",
        fontSize:"70%"
    }

    return <div style={tweet} >
        
        <span style={name}>{props.name} </span>
        <span style={user}>@{props.username} </span>   
        <span style={dated}>• {props.date} </span>
        <br/>
        
        
        <p> {props.message} </p>

    </div>

} 

ReactDOM.render(<App/>, document.getElementById("root"))