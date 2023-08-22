const getters = {
  accountId: state => state.app.model.accountId,
  accountName: state => state.app.model.accountName,
  accountDate: state => state.app.model.accountDate,
  loginName: state => state.app.model.loginName,
  loginUserId: state => state.app.model.loginUserId,
  pwd: state => state.app.model.pwd,
  key: state => state.app.model.key,
  model: state => state.app.model,

  showRb: state => state.runtime.showRedBlue,
  targetUrl: state => state.runtime.targetUrl,

  addRoutes: state => state.app.menus,

  wareHouseList: state => state.base.wareHouseList,

  defWhCode: state => state.runtime.defWhCode,
  defRdCode: state => state.runtime.defRdCode,
  defDeptCode: state => state.runtime.defDeptCode,

  defInWhCode: state => state.runtime.defInWhCode,
  defInRdCode: state => state.runtime.defInRdCode,
  defInDeptCode: state => state.runtime.defInDeptCode,

  defOutWhCode: state => state.runtime.defOutWhCode,
  defOutRdCode: state => state.runtime.defOutRdCode,
  defOutDeptCode: state => state.runtime.defOutDeptCode,

  numProps: state => ['iChangRate', 'iNum', 'iLabelQuantity', 'iOddQuantity', 'iStockQuantity', 'iPlanQuantity', 'iCommitQuantity']
}
export default getters
