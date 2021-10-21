# Electronic-Marketplace
Electronic Marketplace Repository for team G3

Project Goals:
+ Create a marketplace to buy & sell electronics with other users

User Roles:
+ Buyers: Buy items from other sellers. 
+ Sellers: Sell or post items within the marketplace

APIs: 
+ BestBuy

Member/Roles:
+ Brandon: Team Lead, Back-End Dev
+ Alex: Scrum Master, Back-End Dev
+ Luis: Front-End Dev, (Dev-Ops?)
+ Malika: Front-End Dev
+ High-level requirements for Project 2:

Application must leverage the full stack:
+ RDBMS for persistence
+ API built with Java 8+
+ UI built with Angular 7+

Technology framework requirements:
+ Java API will use Hibernate to communicate with RDBMS
+ Java API will leverage the Spring Framework
+ Java API will be RESTful

Other requirements:
+ Application will demonstrate at least ten individual user stories
+ Application will leverage at least one external API
+ Application's own data model must be sufficiently complex (i.e. >2 tables)
+ RDBMS will be deployed to the cloud (AWS RDS)
+ Java API will be deployed to the cloud (AWS EC2)
+ Angular UI will be deployed to the cloud (AWS S3)
+ Pipeline tools: Utilise any of your choosing, AWS CodePipeline/CodeBuild/Elastic Beanstalk OR Jenkins OR TravisCI, etc.
+ Unit testing and e2e testing.
+ BONUS: Accessibility features.

User Stories (Draft):
1. Create new account with unique username and password
2. Login as buyer/seller or admin
3. View all for sale items
4. Seller should be able to accept or deny buy offer
5. Seller should be able to cancel their listing at any time before a buy offer is accepted
6. Buyer should be able to submit a buy request
7. Buyer should be able to select based on condition
8. An admin user can view all transactions
9. Seller should be able to create a listing
10. User should be able to search/filter for an item or category

Stretch Goals:
+ Bidding System
+ Internal Messaging
