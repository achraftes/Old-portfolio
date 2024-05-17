import './styles.scss'


const PageHeaderContent = (p) => {
    const { headerText, icon } = p;

    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>

        </div>
    );
};
export default PageHeaderContent;