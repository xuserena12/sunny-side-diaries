const Resources = () => {
    return (
        <div className="resource-outer">
            <div className="resource-options">
                <ul>
                    <li><button className="resource-btn" type="submit">General</button></li>
                    <li><button className="resource-btn" type="submit">Depression</button></li>
                    <li><button className="resource-btn" type="submit">Anxiety</button></li>
                </ul>
                <div className="resource-urls"></div>
            </div>
        </div>
    )
}

export default Resources;
