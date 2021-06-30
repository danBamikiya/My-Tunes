#!/usr/bin/env bash

RED="\033[0;31m"
CYAN="\033[0;36m"
BBLUE="\033[1;34m"
BYELLOW="\033[1;33m"
NC="\033[0m" #NO COLOR

start() {
    printf "${BBLUE}Starting soundchat development services...${NC}\n\n"
    docker-compose up -d
    docker-compose logs -f
}

stop() {
    printf "${BYELLOW}Stopping soundchat services...${NC}\n\n"
    docker-compose stop
}

teardown() {
    printf "${BYELLOW}Tearing down all soundchat services (containers, networks, volumes)${NC}\n\n"
    docker-compose down -v
}

stop-container() {
    if [[ -z "$1" ]]; then
        printf "${BYELLOW}Specify the container name.${NC}"
    else
        printf "${BYELLOW}Stopping $1 service...${NC}\n\n"
        docker container stop $1
        if [[ ! -z "$2" ]] && [[ "$(echo $2 | sed 's/RM=//')" == "true" ]]; then
            printf "${BYELLOW}Removing $1 service...${NC}\n\n"
            docker container rm $1
        fi
    fi
}

rebuild-image() {
    if [[ -z "$1" ]]; then
        printf "${BYELLOW}Specify the container name.${NC}"
    else
        printf "${BBLUE}Rebuilding $1 service...${NC}\n\n"
        docker-compose up --build $1 -d --no-deps
        docker-compose logs -f
    fi
}

ls() {
    printf "${BBLUE}Listing all services...${NC}\n\n"
    docker-compose ps -a
}

build() {
    printf "${BBLUE}Creating soundchat production services...${NC}\n\n"
    docker-compose build
    docker-compose up -f docker-compose.yml docker-compose.prod.yml -d
    docker-compose logs -f
}

case $1 in
ls)
    ls
    exit
    ;;
start)
    start
    exit
    ;;
stop)
    stop
    exit
    ;;
teardown)
    teardown
    exit
    ;;
stop-container)
    "$@"
    exit
    ;;
rebuild-image)
    "$@"
    exit
    ;;
build)
    build
    exit
    ;;
*)
    if [[ ! -z "$1" ]]; then
        echo -e "${CYAN}$1${NC} ${RED}is not a supported command.${NC}"
    else
        echo -e "${RED}Please specify a command.${NC}"
    fi
    exit 1
    ;;
esac