import moment from 'moment'
export default function formatDate(ts:string){
    const date = moment(+ts)
    const difference = moment.duration(date.diff(moment(+Date.now().toString())))
    // console.log(difference)
    return difference.humanize(true).toLocaleUpperCase()
}