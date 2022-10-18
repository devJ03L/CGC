export const calculoIndiceGrasa = (form) => {    
    let res
    const W = Number(form.waist)
    const N = Number(form.neck)
    const H = Number(form.height)
    const HI = form.gender == 'M' && Number(form.hip)

    if (form.gender == 'H')
        res = ((495 / (1.0324 - (0.19077 * Math.log10(W - N)) + (0.15456 * Math.log10(H)))) - 450).toFixed(1)
    else
        res = ((495 / (1.29579 - (0.35004 * Math.log10(W + HI - N)) + (0.22100 * Math.log10(H)))) - 450).toFixed(1)    
    return res
}