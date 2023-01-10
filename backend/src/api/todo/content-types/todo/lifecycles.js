module.exports={
   async afterCreate(event){
        const {result} = event;
        const templateId = "d-7c449ab46a4b4c2ca5af8a93806857a4";
        try {
            await strapi.plugins['email'].services.email.send({
                to:'nishantt@geekyants.com',
                from:'shedagenishant33@gmail.com',
                subject:`Showcase Form - Geekyants`,
                text:'Your Form is submitted',
                templateId:templateId,
                html: `<strong>Your Form is submitted - ${result.name}</strong>`,
            }),
            await strapi.plugins['email'].services.email.send({
                to:'shedagenishant40@gmail.com',
                from:'shedagenishant33@gmail.com',
                subject:`Showcase Form - Geekyants`,
                text:'ShowcaseForm',
                templateId:templateId,
                html: `<strong> ${result.id} ${result.name} User Added Project</strong>`,
            })
            console.log(result);
        } catch (error) {
            console.log(error.response.body,"+++++++");
        }
    }
}