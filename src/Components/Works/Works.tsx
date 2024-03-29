import s from "./Works.module.scss";
import {OneWork} from "./OneWork";
import {socialNet, todolist} from "../../assets/icons/icons";
import {BigHeader} from "../TextHeaders/BigHeader";
import {LittleHeader} from "../TextHeaders/LittleHeader";
import TodoPh from '../../assets/images/todolist.jpg'
const Slide = require('react-reveal/Slide')




export const Works = () => {
    return (
        <div className={s.main} id={'works'}>
            <div className={s.heading}>
                <LittleHeader text={'Portfolio'}/>
                <BigHeader text={'My works'}/>

            </div>
            <div className={s.withWorks}>
                <Slide bottom>
                    <OneWork icon={socialNet} projectName={'Social network'} title={'socialNet'}
                             imgAddress={'https://www.pixelstalk.net/wp-content/uploads/2015/01/Colorful-3D-Social-Media-Wallpaper-Widescreen-HD-620x413.jpg'}
                             description={'Demo version of social network. Was developed using Typescript, React, Redux,' +
                                 'Redux Thunk, Router-dom, Axios, Mui for some' +
                                 ' components, SCSS, Formik, Bug fixing, deployin. '}
                    address={'https://kseniatst.github.io/Social-network/#/profile'}/>
                    <OneWork icon={todolist} projectName={'Todolist'} title={'todo'}
                             imgAddress={TodoPh}
                             description={'Todolist demo version with using ' +
                                 'React, Redux, Redux-Toolkit, React router-\n' +
                                 'dom v6, Jest(Unit-Tests), Storybook, Axios,\n' +
                                 '\n' +
                                 'Formik, Material UI.\n' +
                                 'Todolist app created with react hooks, routing\n' +
                                 'and redirects, material UI, REST api\n' +
                                 'request/response flow, unit-tests and etc.'}
                    address={'https://KseniaTst.github.io/Todolist/'}/>
                    <OneWork icon={todolist} projectName={'Shop Pizza'} description={'Shop pizza demo project. Created with Typescript, React, Redux,' +
                        'Redux Thunk, Router-dom, Axios, SCSS.'} title={'pizza'}
                             address={'https://shop-pizza-demo-bu9k.vercel.app/front'}
                             imgAddress={'https://i.imgur.com/vqrBuPT.jpg'}/>
                    <OneWork icon={todolist} projectName={'Learning cards'} description={'Learning cards project. Created '+
                        'in command of 3 developers using Typescript, React, Redux,' +
                        'Redux Thunk, React-Router-domv6, Axios, Formik, Material UI, Git, Github.'} title={'cards'}
                             address={'https://card-project-hazel.vercel.app/'}
                             imgAddress={'https://cdn.hundred.org/uploads/innovation/cover_image/1555/wide_Cards_w_Words.jpg'}/>
                </Slide>
            </div>
        </div>
    )
}
