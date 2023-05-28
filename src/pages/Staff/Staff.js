import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Staff.module.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Staff() {
  const cx = classNames.bind(style);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [staffList, setStaffList] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditingStaff(null);
  };

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
    return Math.floor(100 + Math.random() * 900);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    setIsEmailValid(isValid);
    if (isValid) {
      const newStaff = {
        id: generateRandomId(),
        name: document.getElementById('ho_ten').value,
        phone: document.getElementById('sdt_nv').value,
        email: document.getElementById('email').value,
        birthday: document.getElementById('ngaysinh').value,
        address: document.getElementById('diachi').value,
        startDate: document.getElementById('ngayvaolam').value,
        idCard: document.getElementById('cccd').value,
      };

      setStaffList([...staffList, newStaff]);

      document.getElementById('ho_ten').value = '';
      document.getElementById('sdt_nv').value = '';
      setEmail('');
      document.getElementById('ngaysinh').value = '';
      document.getElementById('diachi').value = '';
      document.getElementById('ngayvaolam').value = '';
      document.getElementById('cccd').value = '';

      toggleModal();
    } else {
      console.log('Email không đúng định dạng');
    }
  };

  const handleUpdateStaff = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    setIsEmailValid(isValid);
    if (isValid) {
      const updatedStaff = {
        id: editingStaff.id,
        name: document.getElementById('ho_ten').value || editingStaff.name,
        phone: document.getElementById('sdt_nv').value || editingStaff.phone,
        email: document.getElementById('email').value || editingStaff.email,
        birthday: document.getElementById('ngaysinh').value || editingStaff.birthday,
        address: document.getElementById('diachi').value || editingStaff.address,
        startDate: document.getElementById('ngayvaolam').value || editingStaff.startDate,
        idCard: document.getElementById('cccd').value || editingStaff.idCard,
      };

      const updatedStaffList = staffList.map((staff) => {
        if (staff.id === updatedStaff.id) {
          return updatedStaff;
        }
        return staff;
      });

      setStaffList(updatedStaffList);

      document.getElementById('ho_ten').value = '';
      document.getElementById('sdt_nv').value = '';
      setEmail('');
      document.getElementById('ngaysinh').value = '';
      document.getElementById('diachi').value = '';
      document.getElementById('ngayvaolam').value = '';
      document.getElementById('cccd').value = '';

      toggleModal();
    } else {
      console.log('Email không đúng định dạng');
    }
  };

  const handleEditClick = (staffId) => {
    const editedStaff = staffList.find((staff) => staff.id === staffId);
    setEditingStaff(editedStaff);

    setIsModalOpen(true);
    setEmail(editedStaff.email); // Set the email value when opening the modal for editing
  };

  const handleDeleteStaff = (staffId) => {
    const updatedStaffList = staffList.filter((staff) => staff.id !== staffId);
    setStaffList(updatedStaffList);
  };

  return (
    <div className={cx('wrapper')}>
      <h1>Nhân Viên</h1>
      <div className={cx('tableActions')}>
        <button onClick={toggleModal}>Thêm Nhân Viên</button>
      </div>

      <div className={cx('tableWrapper')}>
        <h2>Danh sách Nhân Viên</h2>

        <table className={cx('table')}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên nhân viên</th>
              <th>Email</th>
              <th>SDT</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Ngày vào làm</th>
              <th>Căn cước công dân</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={index}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.phone}</td>
                <td>{staff.birthday}</td>
                <td>{staff.address}</td>
                <td>{staff.startDate}</td>
                <td>{staff.idCard}</td>
                <td>
                  <button onClick={() => handleEditClick(staff.id)} className={cx('editButton')}>
                    <FaEdit /> Sửa
                  </button>
                  <button onClick={() => handleDeleteStaff(staff.id)} className={cx('deleteButton')}>
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
            <h3>{editingStaff ? 'Sửa Nhân Viên' : 'Thêm Nhân Viên'}</h3>
            <form onSubmit={editingStaff ? handleUpdateStaff : handleSubmit}>
              <div className={cx('formGroup')}>
                <label htmlFor="ho_ten">Tên nhân viên:</label>
                <input
                  placeholder="Nhập tên nhân viên..."
                  type="text"
                  id="ho_ten"
                  defaultValue={editingStaff ? editingStaff.name : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="Nhập email..."
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
                <label htmlFor="sdt_nv">Số điện thoại:</label>
                <input
                  placeholder="Nhập số điện thoại..."
                  type="text"
                  id="sdt_nv"
                  onKeyPress={handlePhoneNumberInput}
                  defaultValue={editingStaff ? editingStaff.phone : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="ngaysinh">Ngày sinh:</label>
                <input
                  placeholder="Nhập ngày sinh..."
                  type="date"
                  id="ngaysinh"
                  defaultValue={editingStaff ? editingStaff.birthday : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="diachi">Địa chỉ:</label>
                <input
                  placeholder="Nhập địa chỉ..."
                  type="text"
                  id="diachi"
                  defaultValue={editingStaff ? editingStaff.address : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="ngayvaolam">Ngày vào làm:</label>
                <input
                  placeholder="Nhập ngày vào làm..."
                  type="date"
                  id="ngayvaolam"
                  defaultValue={editingStaff ? editingStaff.startDate : ''}
                  required
                />
              </div>
              <div className={cx('formGroup')}>
                <label htmlFor="cccd">Căn cước công dân:</label>
                <input
                  placeholder="nhập căn cước công dân..."
                  type="text"
                  id="cccd"
                  defaultValue={editingStaff ? editingStaff.idCard : ''}
                  required
                />
              </div>
              <div className={cx('formActions')}>
                <button type="submit">{editingStaff ? 'Cập Nhật' : 'Thêm'}</button>
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
};
