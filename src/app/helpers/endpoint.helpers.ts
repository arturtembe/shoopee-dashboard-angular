
const host:string = `http://localhost:3333/mongodb/shopee`;

const endpoint = {
    register: `${host}/register`,
    login: `${host}/login`,
    verify: `${host}/verify`,
    otpCreate: `${host}/otp`,
    otpVerify: `${host}/update/status/otp`,
    verifyToken: `${host}/token`,
    // Slug
    userSlugVerify: `${host}/user`,
    // Categoria
    categoriaAdd: `${host}/categoria/add`,
    categoriaView: `${host}/categoria/view`,
    categoriaEdit: `${host}/categoria/edit`,
    categoriaDelete: `${host}/categoria/delete`,
    // Producto
    productoView: `${host}/producto/view`,
    productoAdd: `${host}/producto/add`,
    productoDelete: `${host}/producto/delete`,
    productoEdit: `${host}/producto/edit`,
    productoAddUpload: `${host}/producto/add/upload`,
    productoDeleteUpload: `${host}/producto/delete/upload`,
}

export default endpoint;