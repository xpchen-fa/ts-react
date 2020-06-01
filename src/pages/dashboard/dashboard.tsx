import React from 'react';
import { Row, Col, Tag, Progress, Card, Timeline } from 'antd';
import { AreaChartOutlined, PieChartOutlined, HeatMapOutlined, RiseOutlined, HeartFilled, SmileFilled, ClockCircleOutlined } from '@ant-design/icons';
import StateOverView from '@/components/stateOverView/stateOverView';
import "./dashboard.scss"

export default class Dashboard extends React.Component<any, any> {
    public render() {
        return (
            <div className="container">
                <Row gutter={[16, 16]} className="top-data">
                    <Col span={6}>
                        <div className="data-box">
                            <div className="iconType green"><AreaChartOutlined /></div>
                            <StateOverView title="value" count={100}></StateOverView>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="data-box">
                            <div className="iconType blue"><PieChartOutlined /></div>
                            <StateOverView title="value" count={100}></StateOverView>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="data-box">
                            <div className="iconType yellow"><HeatMapOutlined /></div>
                            <StateOverView title="value" count={100}></StateOverView>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="data-box">
                            <div className="iconType red"><RiseOutlined /></div>
                            <StateOverView title="value" count={100}></StateOverView>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <div className="profile">
                            <div className="top-info">
                                <SmileFilled className="avatar"/>
                                <div className="name">陈陈陈</div>
                            </div>
                            <div className="cell">
                                <HeartFilled />
                                <p className="title">sex</p>
                                <p className="value">female</p>
                            </div>
                            <div className="cell">
                                <SmileFilled />
                                <p className="title">Activity</p>
                                <p className="value">9.8</p>
                            </div>
                            <div className="cell">
                                <SmileFilled />
                                <p className="title">Register</p>
                                <p className="value">2020/05/18 8:00</p>
                            </div>
                            <div className="cell">
                                <SmileFilled />
                                <p className="title">Latest Login</p>
                                <p className="value">2020/05/20 8:00</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="profile">
                            <div className="top-title">
                                <div className="title">Working Progress</div>
                                <div className="name">陈陈陈</div>
                            </div>
                            <div className="cell">
                                <span>1</span>
                                <p className="name">Angla Cool</p>
                                <p className="tags">
                                    <Tag>Tag 1</Tag>
                                    <Tag>Tag 3</Tag>
                                </p>
                                <Progress className="progress" percent={90} />
                            </div>
                            <div className="cell">
                                <span>2</span>
                                <p className="name">Angla Cool</p>
                                <p className="tags">
                                    <Tag>Tag 1</Tag>
                                </p>
                                <Progress className="progress" percent={30} />
                            </div>
                            <div className="cell">
                                <span>3</span>
                                <p className="name">Angla Cool</p>
                                <p className="tags">
                                    <Tag>Tag 1</Tag>
                                    <Tag>Tag 3</Tag>
                                </p>
                                <Progress className="progress" percent={60} />
                            </div>
                            <div className="cell">
                                <span>4</span>
                                <p className="name">Angla Cool</p>
                                <p className="tags">
                                    <Tag>Tag 1</Tag>
                                    <Tag>Tag 2</Tag>
                                    <Tag>Tag 3</Tag>
                                </p>
                                <Progress className="progress" percent={20} />
                            </div>
                            <div className="cell">
                                <span>5</span>
                                <p className="name">Angla Cool</p>
                                <p className="tags">
                                    <Tag>Tag 1</Tag>
                                </p>
                                <Progress className="progress" percent={80} />
                            </div>          
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                        <Card title="Timeline" >
                            <Timeline mode="alternate">
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo.
                                </Timeline.Item>
                                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Technical testing 2015-09-01
                                </Timeline.Item>
                            </Timeline>,
                        </Card>
                    </Col>
                    <Col span={8}>
                        <div className="profile">
                            <div className="title"></div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}