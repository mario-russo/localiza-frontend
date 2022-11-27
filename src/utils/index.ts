export function transformaUrl(estado: string) : string {
   estado = estado.trim().toLowerCase()
   return estado.replace(/ /gi,'-')
}

export function transformaUrlParaString(estado: string) : string {
   estado = estado.trim().toLowerCase()
   return estado.replace(/-/gi,' ')
}