const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,
    showFooter: state => state.state.showFooter,
    changableNum: state => state.state.changableNum,

}
export default getters
