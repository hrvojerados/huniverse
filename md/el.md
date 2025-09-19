Cilj nam je pronaći funkciju $y_{(x)}$ koja minimizira funkcional
$$I_{(y_{(x)})} = \int_{x_1}^{x_{2}} \mathscr{L}_{(x, \,y_{(x)},\,y'_{(x)})}\,dx$$
Gdje je funkcional funkcija čija domena je skup funkcija, a kodomena $\mathbb{R}$.
Neka je $${\bar y_{(x)}} = y_{(x)} + \varepsilon \eta_{(x)},\quad \eta_{(x_1)}=\eta_{(x_2)}=0$$
gdje je $y_{(x)}$ minimizator.
Slijedi:
$$\frac{dI_{(y_{(x)})}}{d\varepsilon} \Bigg\vert_{\varepsilon = 0}= \int_{x_1}^{x_2}\frac{\partial\mathscr{L}_{(x, \,y_{(x)},\,y'_{(x)})}}{\partial\varepsilon}\, dx = 0$$
Korištenjem lančenog pravila i parcilno integracijom dobijemo Euler-Langrageovu jednadžbu:
$$\frac{\partial \mathscr{L}_{(x, \,y_{(x)},\,y'_{(x)})}}{\partial y_{(x)}} - \frac{d}{dx}\frac{\partial \mathscr{L}_{(x, \,y_{(x)},\,y'_{(x)})}}{\partial y'_{(x)}} = 0$$
Odnosno:
$$\frac{\partial F}{\partial y_{(x)}} - \frac{d}{dx}\frac{\partial F}{\partial y'_{(x)}} = 0 \quad (1)$$ 
Jednadžba se još može zapisati na drugi način. Prvo računamo:
$$\frac{dF}{dx} = \frac{dF}{dx} + \frac{dF}{dy}y' + \frac{dF}{dx}y''$$
$$\frac{d}{dx}\Big (y' \frac{\partial F}{\partial y'}\Big)= y''\frac{\partial F}{\partial y'} + y'\frac{d}{dx}\frac{\partial F}{\partial y'}$$
Oduzimanjem ovih jednakosti i korištenejem $(1)$ dobije se:
$$\frac{d}{dx}\Big (F-y'\frac{\partial F}{\partial y'} \Big)- \frac{\partial F}{\partial x}=0$$
Iz ovoga se lagano dobije Beltramijev identitet:
$$F-y'\frac{\partial F}{\partial y'}=C$$
Za više derivacije imamo Euler - Poissonovu jednadžbu :
$$
\frac{\partial F}{\partial y} - \frac{d}
{dx}\Big(\frac{\partial F}{\partial y'}\Big)+\frac{d^{2}}{dx^{2}} \Big(\frac{\partial F}{\partial y''}\Big ) = 0$$
Ako imamo slučaj kao npr.  $F_{(x,u,v,u',v')}$ onda imamo sustav Euler - Lagrange jednadžbi:
$$\frac{\partial F}{\partial u} - \frac{d}{dx}\Big(\frac{\partial F}{\partial u'}\Big)= 0$$
$$\frac{\partial F}{\partial v} - \frac{d}{dx}\Big(\frac{\partial F}{\partial v'}\Big)= 0$$
Ako želimo minimizirati:
$$I_{(z)} = \int_{x_1}^{x_2}\int_{y_1}^{y_{2}}F_{(x,y,z,z_x,z_y)}\,\,dy\,dx$$
To rješavamo s:
$$\frac{\partial F}{\partial z}- \frac{\partial}{\partial x}\Big ( \frac{\partial F}{\partial z_{x} }\Big)- \frac{\partial}{\partial y}\Big(\frac{\partial F}{\partial z_{y}}\Big)= 0$$
detaljnije u izvorima:


