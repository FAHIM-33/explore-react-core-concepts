export default function Singers({name, age, rank}) {
    let styles = { color:'yellow'} 
    return (
<div>
    <h1><span style={styles}>{rank}.</span> {name} (age:{age})</h1>
    {/* <h3>Singer: {name}</h3> */}
    {/* <p>age:{age}</p> */}
    
</div>
    )
}