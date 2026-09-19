/* valiadtation to form*/
function validateForename(field)
{
    return (field == "") ? " No Forename entered.\n" : ""
}
function validateSurname(field)
{
    return (field == "") ? " No Surname entered.\n" : ""
}
function validateEmail(field)
{ 
    if (field == "") return " No Email was Entered.\n"
    else if (!(field.indexOf(".") > 0 &&
        field.indexOf("@") > 0 ||
        !/[^a-zA-Z0-9.@_-]/.test(field)))
    return "The email address is invalid.\n"
return ""
}