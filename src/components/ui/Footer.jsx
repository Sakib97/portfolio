const Footer = () => {
    return (
    <div style={{borderTop: '1px solid black'}}>
        
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ fontSize: '14px', color: 'grey' }}>
                © {new Date().getFullYear()} Ashek Seum
            </span>
            <br />
            <span style={{ fontSize: '14px', color: 'grey' }}>
            Dhaka, Bangladesh
            </span>
        </div>

    </div>);
}

export default Footer;