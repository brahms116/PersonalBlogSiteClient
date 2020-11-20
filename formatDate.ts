import moment from 'moment'
export default function formatDate(ts:string){
    // console.log(ts)
    const date = moment(+ts)
    const difference = moment.duration(date.diff(moment(+Date.now().toString())))
    return difference.humanize(true).toLocaleUpperCase()
}