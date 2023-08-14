export default function(status){
  switch(status){
    case 401:
      return 'Authorization failed'
    case 404:
      return 'Requested URL not found'
    default:
      return 'Some error. Please try again later'
  }
}