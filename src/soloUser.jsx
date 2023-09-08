export default function SoloUser(props) {
    console.log(props)
    let stuils = {
        border:'1px solid yellow',
        padding: '10px',
        marginBottom:'5px',
        borderRadius: '5px'
    }

    let {name, email} = props;
    return (
        <div style={stuils}>
            <h2>Name: {name}</h2>
            <h3>Email:{email}</h3>
        </div>

    )
}