const Person = (props) => {
    const person = {
        backgroundColor: "#f5f6fa",
        color:"#30336b",
        padding:".5em",
        fontFamily:"Arial"
    }

    const hobbies = {
        color:"rgb(164 181 203)"
    }

    const name = {
        color: "#2c3e50",
        fontSize:"120%",
        fontweight:"bold"
    }

    const age = {
        color:"rgb(164 181 203)",
        fontWeight: "lighter"
    }

    return <div style={person} >
        
        <span style={name}>{props.name} </span> 
        <span style={age}> {props.age} </span>
        <ul style={hobbies}>{props.hobbies.map(h => <li>{h}</li>)}</ul>
        <br/>

    </div>

} 