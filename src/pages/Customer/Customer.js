import style from "./Customer.module.scss"
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Customer() {
  const cx = classNames.bind(style);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [CustomerList, setCustomerList] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditingCustomer(null);
  };
  const editingStaff = true; // Replace true with your desired value or expression

  // Use the editingStaff variable in your code
  if (editingStaff) {
    // Do something
  } else {
    // Do something else
  }
  const handlePhoneNumberInput = (e) => {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const generateRandomId = () => {
    return Math.floor(10000 + Math.random() * 90000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    setIsEmailValid(isValid);
    if (isValid) {
      const newCustomer = {
        id: generateRandomId(),
        name: document.getElementById('tenkhachhang').value,
        phone: document.getElementById('sdt_kh').value,
        email: document.getElementById('email').value,
        birthday: document.getElementById('ngaysinh').value,
        address: document.getElementById('diachivp').value,
        startDate: document.getElementById('ngaytaokh').value,
        idCard: document.getElementById('masothue').value,
        description: document.getElementById('mota').value,
        // website: document.getElementById('website').value,
        otherInfo: document.getElementById('thongtinkhac').value,
        bankAccount: document.getElementById('stk_kh').value,
        representative: document.getElementById('nguoidaidien').value,
        position: document.getElementById('chucvu_ndd').value,
        contactPersonPhone: document.getElementById('sdd_ndd').value,
      };

      setCustomerList([...CustomerList, newCustomer]);

      document.getElementById('tenkhachhang').value = '';
      document.getElementById('sdt_kh').value = '';
      setEmail('');
      document.getElementById('ngaysinh').value = '';
      document.getElementById('diachivp').value = '';
      document.getElementById('ngaytaokh').value = '';
      document.getElementById('masothue').value = '';
      document.getElementById('mota').value = '';
      // document.getElementById('website').value = '';
      document.getElementById('thongtinkhac').value = '';
      document.getElementById('stk_kh').value = '';
      document.getElementById('nguoidaidien').value = '';
      document.getElementById('chucvu_ndd').value = '';
      document.getElementById('sdd_ndd').value = '';

      toggleModal();
    } else {
      console.log('Email không đúng định dạng');
    }
  };

  const handleUpdateCustomer = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    setIsEmailValid(isValid);
    if (isValid) {
      const updatedCustomer = {
        id: editingCustomer.id,
        name: document.getElementById('tenkhachhang').value || editingCustomer.name,
        phone: document.getElementById('sdt_kh').value || editingCustomer.phone,
        email: document.getElementById('email').value || editingCustomer.email,
        birthday: document.getElementById('ngaysinh').value || editingCustomer.birthday,
        address: document.getElementById('diachivp').value || editingCustomer.address,
        startDate: document.getElementById('ngaytaokh').value || editingCustomer.startDate,
        idCard: document.getElementById('masothue').value || editingCustomer.idCard,
        description: document.getElementById('mota').value || editingCustomer.description,
        // website: document.getElementById('website').value || editingCustomer.website,
        otherInfo: document.getElementById('thongtinkhac').value || editingCustomer.otherInfo,
        bankAccount: document.getElementById('stk_kh').value || editingCustomer.bankAccount,
        representative: document.getElementById('nguoidaidien').value || editingCustomer.representative,
        position: document.getElementById('chucvu_ndd').value || editingCustomer.position,
        contactPersonPhone: document.getElementById('sdd_ndd').value || editingCustomer.contactPersonPhone,
      };

      const updatedCustomerList = CustomerList.map((Customer) => {
        if (Customer.id === updatedCustomer.id) {
          return updatedCustomer;
        }
        return Customer;
      });

      setCustomerList(updatedCustomerList);

      document.getElementById('tenkhachhang').value = '';
      document.getElementById('sdt_kh').value = '';
      setEmail('');
      document.getElementById('ngaysinh').value = '';
      document.getElementById('diachivp').value = '';
      document.getElementById('ngaytaokh').value = '';
      document.getElementById('masothue').value = '';
      document.getElementById('mota').value = '';
      // document.getElementById('website').value = '';
      document.getElementById('thongtinkhac').value = '';
      document.getElementById('stk_kh').value = '';
      document.getElementById('nguoidaidien').value = '';
      document.getElementById('chucvu_ndd').value = '';
      document.getElementById('sdd_ndd').value = '';

      toggleModal();
    } else {
      console.log('Email không đúng định dạng');
    }
  };

  const handleEditClick = (CustomerId) => {
    const editedCustomer = CustomerList.find((Customer) => Customer.id === CustomerId);
    setEditingCustomer(editedCustomer);

    setIsModalOpen(true);
    setEmail(editedCustomer.email); // Set the email value when opening the modal for editing
  };

  const handleDeleteCustomer = (CustomerId) => {
    const updatedCustomerList = CustomerList.filter((Customer) => Customer.id !== CustomerId);
    setCustomerList(updatedCustomerList);
  };

  return (
    <div className={cx('wrapper')}>
      <h1>Khách Hàng</h1>
      <div className={cx('tableActions')}>
        <button onClick={toggleModal}>Thêm Khách Hàng</button>
      </div>

      <div className={cx('tableWrapper ')}>
        <h2>Danh sách Khách Hàng</h2>

        <table className={cx('table')}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
              <th>SDT</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ VP</th>
              <th>Ngày tạo KH</th>
              <th>Mã số thuế</th>
              <th>Mô tả</th>
              {/* <th>Website</th> */}
              <th>Thông tin khác</th>
              <th>Số tài khoản KH</th>
              <th>Người đại diện</th>
              <th>Chức vụ người đại diện</th>
              <th>SĐT người đại diện</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {CustomerList.map((Customer, index) => (
              <tr key={index}>
                <td>{Customer.id}</td>
                <td>{Customer.name}</td>
                <td>{Customer.email}</td>
                <td>{Customer.phone}</td>
                <td>{Customer.birthday}</td>
                <td>{Customer.address}</td>
                <td>{Customer.startDate}</td>
                <td>{Customer.idCard}</td>
                <td>{Customer.description}</td>
                {/* <td>{Customer.website}</td> */}
                <td>{Customer.otherInfo}</td>
                <td>{Customer.bankAccount}</td>
                <td>{Customer.representative}</td>
                <td>{Customer.position}</td>
                <td>{Customer.contactPersonPhone}</td>
                <td>
                  <button onClick={() => handleEditClick(Customer.id)} className={cx('editButton')}>
                    <FaEdit /> Sửa
                  </button>
                  <button onClick={() => handleDeleteCustomer(Customer.id)} className={cx('deleteButton')}>
                    <FaTrash /> Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className={cx('modal')}>
          <div className={cx('modalContent')}>
            <h3>{editingCustomer ? 'Sửa Khách Hàng' : 'Thêm Khách Hàng'}</h3>
            <form onSubmit={editingCustomer ? handleUpdateCustomer : handleSubmit}>
              <div className={cx('formGroup')}>
                <label htmlFor="tenkhachhang">Tên khách hàng:</label>
                <input
                  placeholder="Nhập tên khách hàng..."
                  type="text"
                  maxLength={50}
                  id="tenkhachhang"
                  defaultValue={editingCustomer ? editingCustomer.name : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="Nhập email..."
                  maxLength={50}
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={cx({ invalid: !isEmailValid })}
                  required
                />
                {!isEmailValid && <span className={cx('error')}>Email không đúng định dạng</span>}
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="sdt_kh">Số điện thoại:</label>
                <input
                  placeholder="Nhập số điện thoại..."
                  maxLength={10}
                  type="tel"
                  id="sdt_kh"
                  onKeyPress={handlePhoneNumberInput}
                  defaultValue={editingCustomer ? editingCustomer.phone : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="ngaysinh">Ngày sinh:</label>
                <input
                  placeholder="Nhập ngày sinh..."
                  type="date"
                  id="ngaysinh"
                  defaultValue={editingCustomer ? editingCustomer.birthday : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="diachivp">Địa chỉ VP:</label>
                <input
                  placeholder="Nhập địa chỉ VP..."
                  maxLength={100}
                  type="text"
                  id="diachivp"
                  defaultValue={editingCustomer ? editingCustomer.address : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="ngaytaokh">Ngày tạo KH:</label>
                <input
                  placeholder="Nhập ngày tạo KH..."
                  type="date"
                  id="ngaytaokh"
                  defaultValue={editingCustomer ? editingCustomer.startDate : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="masothue">Mã số thuế:</label>
                <input
                  placeholder="Nhập mã số thuế..."
                  maxLength={13}
                  type="text"
                  id="masothue"
                  defaultValue={editingCustomer ? editingCustomer.idCard : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="chucvu_ndd">Chức vụ:</label>
                <input
                  placeholder="Nhập chức vụ người đại diện..."
                  maxLength={30}
                  type="text"
                  id="chucvu_ndd"
                  defaultValue={editingCustomer ? editingCustomer.position : ''}
                />
              </div>
              {/* <div className={cx('formGroup')}>
                <label htmlFor="website"> Website: </label>
                <input
                  placeholder="Nhập website..."
                  id="website"
                  type="text"
                  maxLength={200}
                  defaultValue={editingCustomer ? editingCustomer.website : ''}
                />
              </div> */}
              <div className={cx('formGroup')}>
                <label htmlFor="thongtinkhac">Thông tin:</label>
                <input
                  placeholder="Nhập thông tin khác..."
                  id="thongtinkhac"
                  type="text"
                  maxLength={200}
                  defaultValue={editingCustomer ? editingCustomer.otherInfo : ''}
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="stk_kh">Số tài khoản KH:</label>
                <input
                  placeholder="Nhập số tài khoản kh..."
                  type="tel"
                  maxLength={15}
                  id="stk_kh"
                  onKeyPress={handlePhoneNumberInput}
                  defaultValue={editingCustomer ? editingCustomer.bankAccount : ''}
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="nguoidaidien">Người đại diện:</label>
                <input
                  placeholder="Nhập người đại diện..."
                  maxLength={50}
                  type="text"
                  id="nguoidaidien"
                  defaultValue={editingCustomer ? editingCustomer.representative : ''}
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="mota">Mô tả: </label>
                <input
                  placeholder="Nhập mô tả..."
                  maxLength={100}
                  id="mota"
                  defaultValue={editingCustomer ? editingCustomer.description : ''}
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="sdd_ndd">SĐT người đại diện:</label>
                <input
                  placeholder="Nhập sdt người đại diện..."
                  type="tel"
                  maxLength={10}
                  id="sdd_ndd"
                  onKeyPress={handlePhoneNumberInput}
                  defaultValue={editingCustomer ? editingCustomer.contactPersonPhone : ''}
                />
              </div>
              <div className={cx('formActions')}>
                <button type="submit">{editingStaff ? 'Thêm' : 'Thêm'}</button>
                <button type="button" onClick={toggleModal}>
                  Hủy
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}
