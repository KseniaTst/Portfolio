import s from './Distance.module.scss'
import {CustomButton} from "../Button";

export const Distance = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <CustomButton href={'#front'} text={'Hire me'}/>
            </div>
        </div>
    )
}
