import clsx from 'clsx'


import style from './heading.module.scss'

function Heading({ primery, Secondary,Success,Danger,Warning,Info, Light,Dark}) {
    const classes = clsx(style.heading, {
        [style.primery]: primery,
        [style.Secondary]: Secondary,      
        [style.Success] : Success,
        [style.Danger] : Danger,
        [style.Warning] : Warning,
        [style.Info] : Info,
        [style.Light] : Light,
        [style.Dark] : Dark
    })

    return <>
        <button className={classes}>clickme</button>

    </>

}
export default Heading