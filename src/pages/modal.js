import { Drawer, Form, InputNumber, Button, Col, Row, Input, Select, DatePicker, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
const { Option } = Select;

const InterestedForm = ({visible, onClose,handleChange ,handleSubmit, setValues, values}) => {
  const { name,
    email,
    phone_no,
    choose,
    fam_mem,
    date,
    message
  } = values;


    return (
      <>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div 
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} type="info">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input 
                    placeholder="Please enter user name" 
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  rules={[{ required: false, message: 'Please enter your email' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    // addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Number"
                  rules={[{ required: true, message: 'Please Enter Contact No.' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    type='number'
                    name='phone_no'
                    value={phone_no}
                    onChange={handleChange}

                    addonBefore="+91"
                    // addonAfter=".com"
                    placeholder="Please Enter Contact No."
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Type"
                  name = 'choose'
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select 
                  placeholder="Please choose the type"
                  type='text'
                  name = 'choose'
                  value={choose}
                  onChange={v => {setValues({choose:v});}}
                  >
                    <Option value="private">Private</Option>
                    <Option value="public">Paying Guest</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="No. of Family Members"
                  
                  rules={[{ required: true, message: 'No. of Family Members' }]}
                >
                  <Input
                  max={10} 
                  style={{ width: '100%' }} 
                  type = 'number'
                  name='fam_mem'
                  value={fam_mem}
                  onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                  value = {date}
                  onChange={handleChange}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Message"
                  rules={[
                    {
                      required: true,
                      message: 'please enter you message for the Landlord',
                    },
                  ]}
                >
                  <Input.TextArea 
                    rows={4} 
                    placeholder="please enter you message for the Landlord"
                    type='text'
                    name='message'
                    value={message}
                    onChange={handleChange} 
                     />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }

export default InterestedForm;
