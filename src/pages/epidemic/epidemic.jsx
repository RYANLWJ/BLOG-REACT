import React, { useState, useEffect } from 'react';
import { Accordion, List } from 'antd-mobile';
import { getEpidemicData } from '../../request/api';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import './epidemic.less';

const Epidemic = () => {
  const [dataList, setDataList] = useState([]);
  const [state, setState] = useState({
    refreshing: true,
    isLoading: true,
    height: document.documentElement.clientHeight,
    useBodyScroll: false
  });
  useEffect(() => {
    getList();
 
    // const hei = state.height - React.ReactDOM.findDOMNode(React.ReactDOM.lv).offsetTop;
    const hei = 100;
    setTimeout(() => {
      setState({
        height: hei,
        refreshing: false,
        isLoading: false
      });
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 获取疫情数据 */
  const getList = async () => {
    const data = await getEpidemicData();
    console.log(data);
    data && setDataList(data.data.list);
  };
  const onRefresh = () => {
    setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      alert(111)
      setState({
        refreshing: false,
        isLoading: false
      });
    }, 600);
  };

  const onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (state.isLoading && !state.hasMore) {
      return;
    }
    console.log('reach end', event);
    setState({ isLoading: true });
    setTimeout(() => {
      setState({
        isLoading: false
      });
    }, 1000);
  };
  /* 页面头部 */
  const Header = () => (
    <div className="top-header pl-15 pr-30">
      <span>全国疫情数据</span>
    </div>
  );
  /* 手风琴头部 */
  const DataHeader = () => (
    <div className="header pl-15 pr-30">
      <div className="item">
        <span className="text">地区</span>
      </div>
      <div className="item">
        <span className="text">确诊</span>
      </div>
      <div className="item">
        <span className="text">治愈</span>
      </div>
      <div className="item">
        <span className="text">死亡</span>
      </div>
    </div>
  );
  /* 省 */
  const provinceWrapper = item => (
    <div className="province-header">
      <div className="item">
        <span className="text">{item.name}</span>
      </div>
      <div className="item">
        <span className="text">{item.value}</span>
      </div>
      <div className="item">
        <span className="text">{item.cureNum}</span>
      </div>
      <div className="item">
        <span className="text">{item.deathNum}</span>
      </div>
    </div>
  );
  /* 市 */
  const cityItems = item =>
    item.city.map(item => (
      <List.Item key={item.name}>
        <div className="city-header">
          <div className="item">
            <span className="text">{item.name}</span>
          </div>
          <div className="item">
            <span className="text">{item.conNum}</span>
          </div>
          <div className="item">
            <span className="text">{item.cureNum}</span>
          </div>
          <div className="item">
            <span className="text">{item.deathNum}</span>
          </div>
        </div>
      </List.Item>
    ));

  const provinceItems = () =>
    dataList.map(item => (
      <Accordion.Panel header={provinceWrapper(item)} key={item.name}>
        <List className="my-list">{cityItems(item)}</List>
      </Accordion.Panel>
    ));

  return (
    <div
      id="Epidemic"
      pullToRefresh={<PullToRefresh
        refreshing={state.refreshing}
        onRefresh={onRefresh}
      />}
    >
      <Header></Header>
      <DataHeader></DataHeader>
      <Accordion defaultActiveKey="0" className="my-accordion">
        {provinceItems(dataList)}
      </Accordion>
    </div>
  );
};
export default Epidemic;
