
const nodemailer=require("nodemailer");

export default async function handler(req,res){
 if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
 try{
 const {name,email,company,interest,message}=req.body;
 const transporter=nodemailer.createTransport({
 host:process.env.SMTP_HOST,
 port:Number(process.env.SMTP_PORT),
 secure:process.env.SMTP_SECURE==="true",
 auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}
 });
 await transporter.sendMail({
 from:`BrainByte Website <${process.env.CONTACT_FROM_EMAIL}>`,
 to:process.env.CONTACT_TO_EMAIL,
 replyTo:email,
 subject:`New Website Enquiry - ${name}`,
 html:`<h2>New Enquiry</h2>
 <p><b>Name:</b> ${name}</p>
 <p><b>Email:</b> ${email}</p>
 <p><b>Company:</b> ${company||"-"}</p>
 <p><b>Interest:</b> ${interest||"-"}</p>
 <p><b>Message:</b><br>${message}</p>`
 });
 res.status(200).json({success:true});
 }catch(e){console.error(e);res.status(500).json({error:"Failed"});}
}
