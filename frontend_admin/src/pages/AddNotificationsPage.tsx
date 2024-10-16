import { useNavigate, useLocation } from 'react-router-dom'
import icon from '../assets/Icon.svg'
import styles from './styles/addnotificationpage.module.scss'
import { useEffect, useState } from 'react'
import { updateUser, User } from '../api/notifications/requests'

const AddTelegramNotificationPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = location.state || {}
  const { nameAndLastname, roles } = user || {}
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState<User | null>(null)

  useEffect(() => {
    if (nameAndLastname) {
      const [first, last] = nameAndLastname.split(' ')
      setFirstName(first)
      setLastName(last)
    }
  }, [nameAndLastname])

  useEffect(() => {
    if (user) {
      setUserData(user)
    }
  }, [user])

  const [formOfExcursion, setFormOfExcursion] = useState(false)
  const [formVacancy, setFormVacancy] = useState(false)
  const [formPartner, setFormPartner] = useState(false)
  const [formShareholder, setFormShareholder] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (roles) {
      setFormOfExcursion(roles.includes('Форма экскурсии'))
      setFormVacancy(roles.includes('Форма вакансии'))
      setFormPartner(roles.includes('Форма партнеров'))
      setFormShareholder(roles.includes('Форма акционеров'))
      setIsAdmin(roles.includes('Администратор'))
    }
  }, [roles])

  const handleBackClick = () => {
    navigate('/notifications')
  }

  const handleCheckboxChange =
    (setter: (value: boolean) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.checked)
    }

  const handleSaveClick = async () => {
    if (userData) {
      const updatedUser = {
        id: userData.id,
        username: userData.username,
        nameAndLastname: `${firstName} ${lastName}`,
        roles: [
          isAdmin && 'ADMIN',
          formOfExcursion && 'formOfExcursions',
          formVacancy && 'formVacancy',
          formPartner && 'formPartner',
          formShareholder && 'formShareholder',
        ].filter(Boolean) as string[],
      }
      try {
        await updateUser(updatedUser)
        alert('Пользователь успешно обновлен')
        navigate('/notifications')
      } catch (error) {
        console.error('Ошибка при обновлении пользователя', error)
      }
    }
  }

  return (
    <>
      <button className={styles.back_btn} onClick={handleBackClick}>
        <img src={icon} alt="" />
      </button>
      <section className={styles.add_notification_block}>
        <section>
          <h2 className={styles.title}>Заполните данные пользователя</h2>
          <div className={styles.add_notification_input}>
            <input
              type="text"
              placeholder="Имя пользователя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Фамилия пользователя"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={styles.add_notification_check}>
            <h2>
              Выберите обращения с сайта, которые может видеть пользователь
            </h2>
            <section className={styles.check_section}>
              <div className={styles.add_notification_checkblock}>
                <p>Администратор</p>
                <div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={isAdmin}
                      onChange={handleCheckboxChange(setIsAdmin)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>

              <div className={styles.add_notification_checkblock}>
                <p>Форма экскурсии</p>
                <div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={formOfExcursion}
                      onChange={handleCheckboxChange(setFormOfExcursion)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
              <div className={styles.add_notification_checkblock}>
                <p>Форма вакансий</p>
                <div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={formVacancy}
                      onChange={handleCheckboxChange(setFormVacancy)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
              <div className={styles.add_notification_checkblock}>
                <p>Форма партнеры</p>
                <div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={formPartner}
                      onChange={handleCheckboxChange(setFormPartner)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
              <div className={styles.add_notification_checkblock}>
                <p>Форма акционеров</p>
                <div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={formShareholder}
                      onChange={handleCheckboxChange(setFormShareholder)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </section>
          </div>
        </section>
        <button className={styles.save_btn} onClick={handleSaveClick}>
          Сохранить
        </button>
      </section>
    </>
  )
}

export default AddTelegramNotificationPage
