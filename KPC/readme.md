# Crud

### Prerequisites
- Docker
- Docker Compose

### Database 
- localStorage

### Programing language
- react 
- typescript

### How to run project
1. Go to project's root directory.
2. `docker-compose --compatibility -f docker-compose.dev.yml run --rm install`
3. wait for database start complete
4. `docker-compose --compatibility -f docker-compose.dev.yml run --rm -p 3000:3000 dev`
5. Application will be served at http://localhost:3000
