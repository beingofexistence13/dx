bash -c ". .nvm/nvm.sh \
    && nvm install 16 \
    && nvm use 16 \
    && nvm alias default 16"

echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
