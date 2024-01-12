const App = () => {
    return <div>
            <Person name="Ursula Downs" age="27" hobbies={['reading history', 'archaeology', 'hiking']}/>
            <Person name="James Rogers" age="32" hobbies={['card games', 'drawing', 'sleep']}/>
            <Person name="Finn Edwards" age="38" hobbies={['biking', 'wine tasting', 'knots']}/>
        </div>
}
ReactDOM.render(<App/>, document.getElementById("root"))