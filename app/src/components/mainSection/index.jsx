import illustrationMain from '../../assets/image/ReactJs.png'
import Card from '../card'
import './style.css'

const Main = () => {
    return(
        <main>
            <img src={illustrationMain} alt="Logo React"/>
            <h2>Aprenda com projetos reais</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia.
                Facilis, officia incidunt molestiae voluptate, dolorem libero porro deleniti deserunt nobis, molestias odit quae. Qui quisquam unde laudantium facere inventore, ad excepturi, ex sequi porro reprehenderit praesentium asperiores amet minus.
                Quod nisi, nihil accusamus distinctio quam minima dolore fuga inventore quaerat obcaecati aliquam! Dignissimos quisquam est ea? Ipsa distinctio qui quam! Iste sint, nobis velit voluptatibus pariatur quod itaque totam.
            </p>

            <div className="card-grid">
                <Card title={"JavaScript Moderno"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"ReactJs na Prática"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"JavaScript Moderno"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"ReactJs na Prática"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"JavaScript Moderno"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"ReactJs na Prática"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"JavaScript Moderno"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"ReactJs na Prática"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia"}/>
                <Card title={"ReactJs na Prática"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo et modi dignissimos blanditiis necessitatibus itaque possimus similique rem vel. Suscipit expedita iusto perferendis ut aliquam magni recusandae, tenetur quia. "}/>
            </div>
        </main>
    )
}

export default Main