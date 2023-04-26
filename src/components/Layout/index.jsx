import Header from '../Header'

const Layout = ({ children, ...props }) => {
    return (
        <div className="layout-main">
            <Header />
            {children}
        </div>
    )
}

export default Layout
